const setPatchVersion = () => {
    const version = process.argv[2]
    const newPatchVersion = process.argv[3]

    const majorAndMinorPattern = /\d*\.\d*\./;
    const majorAndMinorVersion = majorAndMinorPattern.exec(version);
    const newVersion = `${majorAndMinorVersion}${newPatchVersion}`;

    console.log(newVersion)
};

setPatchVersion()
