{

    // constrains


    const addCourseStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
        const course = 'web development'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseStudent({
        id: 222,
        name: 'nappy',
        email: 'dwd@.com',
        devType: 'nextlevel'
    })
    const student2 = addCourseStudent({
        id: 333,
        name: 'bappy',
        email: 'ddd@.com',
        hasWatch: 'apple'
    })

    const student3 = addCourseStudent({id: 22, name: 'bappy', email: 'awdwad', emni: 'emni' })































}