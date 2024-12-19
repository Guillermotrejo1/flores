declare module 'aos' {
    interface AOS {
    init(options: { duration: number; once: boolean }): void;
    }
    const AOS: AOS;
    export default AOS;
    }