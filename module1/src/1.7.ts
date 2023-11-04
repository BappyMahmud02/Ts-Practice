{
// spread operator
// rest operator
// distructuring


// learn spread operator

const bros1 : string[] = ['bappy', 'shakil','mizan',]
const bros2 : string[] = ['tonmoy', 'nahid','rahat']

bros1.push(...bros2)


const mentors1 = {
    typescript : 'mezba',
    redux: 'mir',
    dbms: 'mizan'
}

const mentors2 = {
    prisma : 'Firoz',
    Next: 'Tonmoy',
    cloud: 'nahid'
}
const mentorlist = { 
    ...mentors1,
    ...mentors2
}


// learn rest operator

const greetFriends = (...friends : string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);

    friends.forEach((friend: string) => console.log(`Hi ${friend}`))
}

greetFriends('abul', "kabul", 'babul','ubul','labul')






}