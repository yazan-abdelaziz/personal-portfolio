export interface IHealthCheck {
    uptime: number,
    responseTime: [number, number],
    message: string,
    timestamp: number
}