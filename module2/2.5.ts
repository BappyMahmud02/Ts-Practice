{

    // function with generic

    const createArray = (param: string): string[] => {
        return [param]
    }


    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res1 = createArray('Bangladesh')
    const resGeneric = createArrayWithGeneric<string>('Bangladesh')

    type User = { id: number; name: string }

    const resGenericObj = createArrayWithGeneric<User>({ id: 22, name: 'bappy' })





    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const res10 = createArrayWithTuple<string, number>('Bangladesh', 21)
    const res11 = createArrayWithTuple<string, { name: string }>('Bangladesh', { name: 'asia' });



    const addCourseStudent = <T>(student: T)  => {
        const course = 'web development'

        return{
            ...student,
            course
        }
    }

    const student1 = addCourseStudent({name: 'nappy', email: 'dwd@.com', devType: 'nextlevel'})
    const student2 = addCourseStudent({name: 'bappy', email: 'ddd@.com', hasWatch: 'apple'})




















}