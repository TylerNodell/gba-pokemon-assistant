import { ipcRenderer } from 'electron'

const dataGBA = {
  pokemon: true,
  listen: (port: number, host: string) => ipcRenderer.send('listen', port, host),
  onData: (callback: (data: Buffer) => void) => ipcRenderer.on('data', (event, data) => callback(data)),
}

export default dataGBA;