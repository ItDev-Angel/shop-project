import {useState} from 'react'
import {Card,CardContent,TextareaAutosize,Typography,Button,TextField}from '@mui/material'
type Props = {}
type Review = {
  name: string
  text: string
}
const Reviews = (props: Props) => {
  const arrReviews:Review[]=[
    {name:'Anna', text: 'bchbdhcbdbhcbdhcbdbc'},
    {name:'Angel', text: 'bchbdhcbdbhcbdhcbdbc'},
    {name:'Max', text: 'bchbdhcbdbhcbdhcbdbc'},
  ]
  const [reviews, setReviews] = useState<Review[]>(arrReviews)
  const [newReviews, setNewReviews] = useState<Review>({
    name:'', 
    text: '',
  })
  const handleChangeName = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setNewReviews((prevState:Review)=>({
      ...prevState, 
      name: e.target.value,
    }))
  }
  const handleChangeText = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setNewReviews((prevState:Review)=>({
      ...prevState, 
      text: e.target.value,
    }))
  }
  const onSend = (e:React.FormEvent<HTMLInputElement>)=>{
    e.preventDefault()
    if(newReviews.name === "" || newReviews.text === ""){
      alert("Please all fields are required")
    }else {
      setReviews((prevState:Review[])=>{
        return [...prevState, newReviews]
      })
      setNewReviews({name:'',text:''})
    }
  }
  return (
    <>
    <h2>Reviews</h2>
    {
      reviews.map((review:Review, i:number) =>(
        <Card
        variant="outlined"
        style={{margin:'20px 0', background:'graylight'}}
        key={i}>
          <CardContent>
            <Typography variant="h6">
              {review.name}
            </Typography>
            <Typography variant="h6">
              {review.text}
            </Typography>
          </CardContent>
        </Card>
      ))}
      {/* <Card>
        <CardContent>
          <form onSubmit={onSend()}>
          <Typography variant="h6">Plase lived preview</Typography>
          <div>
            <TextField size="small" 
            value={newReviews.name}
            onChange={handleChangeName}
            />
            <br/>
            <TextareaAutosize minRows={5} 
            value={newReviews.text}
            onChange={handleChangeText}/>
          </div>
          <div>
            <Button variant="outlined" type="submit">Leave review</Button>
          </div>
          </form>
        </CardContent>
      </Card> */}
      
    </>
  )
}

export default Reviews