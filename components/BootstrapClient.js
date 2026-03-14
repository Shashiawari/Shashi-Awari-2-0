"use client"

import { useEffect } from 'react';

let bootstrapPromise;

function loadBootstrap() {
  if (!bootstrapPromise) {
    bootstrapPromise = import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }

  return bootstrapPromise;
}

function BootstrapClient() {
  useEffect(() => {
    loadBootstrap();
  }, []);

  return null;
}

export default BootstrapClient;
