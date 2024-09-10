function password(obj) {
    if (obj.birthYear.toString().length !== 4) {
        return "invalid "
    }
    let captaliSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    let passwordString = captaliSiteName+'#'+obj.name+'@'+obj.birthYear;
    return passwordString
}
console.log(
    password({ name: 'kolimuddin' ,birthYear: 1908 , siteName: 'google' }));


