import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

const BASE_URL = "http://localhost:3005"
function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");

  }
  const getUsersById = async (userid) => {
    const response = await axios.get(BASE_URL + "/users" + userid);

  }

  const userCreate = async (newUser) => {
    const response = await axios.post(BASE_URL + "/users", newUser)


  }

  const upDateUser = async (userid, upDatedUser) => {
    await axios.put(`${BASE_URL} /users/${userid}`, upDatedUser)
  }

  const deleteUser = async (userid) => {
    const deleteResponse = await axios.delete(`${BASE_URL}/users/${userid}`)
    console.log(deleteResponse.data)
  }
  useEffect(() => {
    // const degıstir = {
    //   name: "Ahmet",
    //   password: "1234"
    // }
    // upDateUser("1", degıstir)
    deleteUser("1")
  }, [])

  return (
    <div>

    </div>
  )
}

export default App
