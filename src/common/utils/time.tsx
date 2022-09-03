export const timeToSeconds = (time:string) => {

    const [hh, mm, ss] = time.split(':');
    const hhToSs = Number(hh) * 3600;
    const mmToSs = Number(mm) * 60;
    
    return hhToSs + mmToSs + Number(ss);
}