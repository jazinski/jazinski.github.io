import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';
// https://vitejs.dev/config/

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const PUBLIC_URL = process.env.VITE_PUBLIC_URL || '/hr/portal/';

  return defineConfig({
    envPrefix: 'REACT_',
    base: `${PUBLIC_URL}`,
    plugins: [mkcert(), react()],
    server: {
      port: 3000,
      https: true,
    },
  });
};
