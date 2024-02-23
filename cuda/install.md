
# install cuda
[CUDA on WSL User Guide](https://docs.nvidia.com/cuda/wsl-user-guide/index.html#cuda-support-for-wsl-2)
[CUDA Toolkit 11.6 Downloads | NVIDIA Developer](https://developer.nvidia.com/cuda-11-6-0-download-archive?target_os=Linux&target_arch=x86_64&Distribution=WSL-Ubuntu&target_version=2.0&target_type=deb_local)

```bash
wget https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/cuda-wsl-ubuntu.pin
sudo mv cuda-wsl-ubuntu.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/11.6.0/local_installers/cuda-repo-wsl-ubuntu-11-6-local_11.6.0-1_amd64.deb
sudo dpkg -i cuda-repo-wsl-ubuntu-11-6-local_11.6.0-1_amd64.deb
sudo apt-key add /var/cuda-repo-wsl-ubuntu-11-6-local/7fa2af80.pub
sudo apt-get update
sudo apt-get -y install cuda
```

## 配置环境
```bash
vim ~/.bashrc
```
添加配置
```bash
export CUDA_HOME=/usr/local/cuda-11.6
export PATH=$PATH:$CUDA_HOME/bin
export LD_LIBRARY_PATH=/usr/local/cuda-11.6/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```
执行
```bash
source ~/.bashrc
```
安装依赖
```bash
sudo apt-get install freeglut3-dev build-essential libx11-dev libxmu-dev libxi-dev libgl1-mesa-glx libglu1-mesa libglu1-mesa-dev
```

查看cuda是否安装好
```bash
nvcc -V
```
![[Pasted image 20221227115141.png]]
[nvidia - Unable to install CUDA on Ubuntu 22.04 WSL2 - Ask Ubuntu](https://askubuntu.com/questions/1407962/unable-to-install-cuda-on-ubuntu-22-04-wsl2)
# install cudnn
[cuDNN Archive | NVIDIA Developer](https://developer.nvidia.com/rdp/cudnn-archive)

选择 Local Installer for Linux x86_64 (Tar)


```bash
cd cudnn-linux-x86_64-8.4.1.50_cuda11.6-archive/
sudo cp -P lib/libcudnn* /usr/local/cuda-11.6/lib64/
sudo cp -P include/cudnn*  /usr/local/cuda-11.6/include
sudo chmod a+r /usr/local/cuda-11.6/include/cudnn*
sudo chmod a+r /usr/local/cuda-11.6/lib64/libcudnn*
```


# install pytoch

```bash
conda install pytorch torchvision torchaudio pytorch-cuda=11.6 -c pytorch -c nvidiay
```