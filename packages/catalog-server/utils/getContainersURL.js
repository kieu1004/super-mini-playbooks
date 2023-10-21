const getContainersURL = ({
  // hostname = 'http://192.168.0.4:3000',
  hostname = 'http://192.168.0.4:3000',
  appName,
  version,
  platform,
}) => {
  return `${hostname}/${appName}?platform=${platform}&appVersion=${version}`;
};

export default getContainersURL;
