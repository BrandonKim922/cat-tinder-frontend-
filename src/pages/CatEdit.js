import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams()
  const cat = cats.find((item) => item.id === +id)
  const navigate = useNavigate()


  const [catFormData, setCatFormData] = useState({
    name: cat?.name,
    age: cat?.age,
    about: cat?.about,
    image: cat?.image
  })

  const handleSubmit = () => {
    updateCat(catFormData, cat.id)
    navigate(`/catshow/${cat.id}`)
  }
  

  
  return (
    <>
      <h3>Modify Your Cat's Information</h3>
      <Form>
        <FormGroup>
          <Label htmlFor="name">Enter Your Cat's Name</Label>
          <Input
            data-testid="name"
            name="name"
            type="text"
            value={catFormData.name}
            onChange={(e) =>
              setCatFormData({ ...catFormData, name: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age">Enter Your Cat's Age</Label>
          <Input
            data-testid="age"
            name="age"
            type="number"
            value={catFormData.age}
            onChange={(e) =>
              setCatFormData({ ...catFormData, age: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="about">Enter What Your Cat Likes To Do</Label>
          <Input
            id="about"
            data-testid="about"
            name="about"
            type="textarea"
            value={catFormData.about}
            onChange={(e) =>
              setCatFormData({ ...catFormData, about: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="url">Enter the URL of Your Cat's Image</Label>
          <Input
            data-testid="image"
            name="image"
            type="text"
            value={catFormData.image}
            onChange={(e) =>
              setCatFormData({ ...catFormData, image: e.target.value })
            }
          />
        </FormGroup>
        <Button onClick={cat ? handleSubmit : () => alert("Cat not found")}>Submit</Button>
      </Form>
    </>
  )
}

export default CatEdit
