export interface Project {
    id: string
    isDeployed: boolean
    isPrivate: boolean
    hasReport: boolean
    name: string
    summary: string
    previewImage: string
    colorHue: number
    description: string
    deployLink?: string
    githubLink?: string
    reportPath?: string
    demoImage?: string
}
