import { firebaseDB } from '../firebase/app'
import { getDocs, doc, updateDoc, setDoc, deleteDoc, collection, getDoc } from 'firebase/firestore';

const alumnosDB = collection(firebaseDB, 'alumnos');

export class Alumno {
    constructor(id, nombre, carrera, edad) {
        this.id = id;
        this.nombre = nombre;
        this.carrera = carrera;
        this.edad = edad;
    }
}

/**
 * Lista de alumnos
 * @returns {Promise<Alumno[]>}
 */
export const getAlumnos = async () => {
    const docsRef = await getDocs(alumnosDB);
    const docs = docsRef.docs.map(doc => (new Alumno(
        doc.id,
        doc.data().nombre,
        doc.data().carrera,
        doc.data().edad
    )));

    return docs;
}

/**
 * Obtener un alumno
 * @param {string} id 
 * @returns 
 */
export const getAlumno = async (id) => {
    const docRef = await doc(alumnosDB, id);
    const docAlumno = await getDoc(docRef);

    const alumno = new Alumno(
        docAlumno.id,
        docAlumno.data().nombre,
        docAlumno.data().carrera,
        docAlumno.data().edad
    );
    return alumno;
}


/**
 * Agrega un alumno
 * @param {Alumno} alumno
 */
export const addAlumno = async (alumno) => {
    const docRef = await doc(alumnosDB, alumno.id);
    const docAlumno = await getDoc(docRef);
    if(docAlumno.exists()) throw new Error('El alumno ya existe');

    await setDoc(docRef, alumno);
}

/**
 *  Elimina un alumno
 * @param {string} id 
 */
export const deleteAlumno = async (id) => {
    const docRef = doc(alumnosDB, id);
    await deleteDoc(docRef);
}

/**
 *  Edita un alumno
 * @param {Alumno} alumno 
 */
 export const editAlumno = async (alumno) => {
    const docRef = doc(alumnosDB, alumno.id);
    await updateDoc(docRef, alumno);
}