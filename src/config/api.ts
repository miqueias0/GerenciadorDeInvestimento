import { environment } from 'src/environments/environment';
export const baseUrl = environment.production ? window.location.origin : 'https://localhost:8084/api';
