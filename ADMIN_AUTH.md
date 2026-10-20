# Admin login setup

Admin users are stored in Turso. Passwords are saved as scrypt hashes; the database never stores the typed password.

1. Make sure `TURSO_DATABASE_URL` and a newly rotated `TURSO_AUTH_TOKEN` are set in `.env.local`.
2. Run `npm run admin:create` from an interactive terminal. Enter the admin email and choose a password of at least 10 characters. Password input is hidden while typing.
3. Open `/admin` and sign in with that email and password.
4. Set the Turso variables in the production host's environment settings too, then redeploy.

The session cookie is HTTP-only, signed using the Turso token, and expires after 12 hours. Rotating the Turso token also invalidates existing admin sessions.
