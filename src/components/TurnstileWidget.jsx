"use client";

import Script from "next/script";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from "react";

const developmentSiteKey = "1x00000000000000000000AA";

const TurnstileWidget = forwardRef(function TurnstileWidget(
  { action, onError, onExpire, onVerify },
  ref
) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onErrorRef = useRef(onError);
  const onExpireRef = useRef(onExpire);
  const onVerifyRef = useRef(onVerify);

  const siteKey =
    process.env.NODE_ENV === "development"
      ? developmentSiteKey
      : process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  useEffect(() => {
    onErrorRef.current = onError;
    onExpireRef.current = onExpire;
    onVerifyRef.current = onVerify;
  }, [onError, onExpire, onVerify]);

  const renderWidget = useCallback(() => {
    if (
      !siteKey ||
      !containerRef.current ||
      !window.turnstile ||
      widgetIdRef.current !== null
    ) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      action,
      appearance: "always",
      callback: (token) => onVerifyRef.current?.(token),
      "error-callback": () => onErrorRef.current?.(),
      "expired-callback": () => onExpireRef.current?.(),
      "timeout-callback": () => onExpireRef.current?.(),
    });
  }, [action, siteKey]);

  useImperativeHandle(
    ref,
    () => ({
      reset() {
        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.reset(widgetIdRef.current);
          onExpireRef.current?.();
        }
      },
    }),
    []
  );

  useEffect(() => {
    renderWidget();

    return () => {
      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  if (!siteKey) {
    return (
      <p className="text-sm text-red-600" role="alert">
        CAPTCHA is temporarily unavailable. Please try again later.
      </p>
    );
  }

  return (
    <>
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={renderWidget}
        onError={() => onErrorRef.current?.()}
      />
      <div ref={containerRef} />
    </>
  );
});

export default TurnstileWidget;
