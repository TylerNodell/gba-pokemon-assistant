// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';
import dataGBA from './dataGBA';


contextBridge.exposeInMainWorld('dataGBA', dataGBA);

contextBridge.exposeInMainWorld('electron', {
  closeServer: () => ipcRenderer.send('close-server')
});