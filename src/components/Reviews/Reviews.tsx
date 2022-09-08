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
  const [newReview, setNewReview] = useState<Review>({
    name:'', 
    text:'',
  })
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewReview((prevState:Review) => ({
      ...prevState, 
      name: e.target.value,
    }))
  }
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview((prevState:Review) => ({
      ...prevState, 
      text: e.target.value,
    }))
  }
  const onSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (newReview.name === "" || newReview.text === "") {
      alert ("Please all fields are required")
    } else {
      setReviews((prevState:Review[]) => {
        return [...prevState, newReview]
      })
      setNewReview({
        name: '',
        text: '',
      })
    }
  }
  return (
    <>
    <h2>Reviews</h2>
    {reviews.map((review:Review, i:number) =>(
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
      ))
    }
    <Card
      variant="outlined"
      style={{
        maxWidth: 400, 
        justifyContent: 'center',
        display: 'flex',
        margin:'20px 0', 
      }}
      >
      <CardContent>
        <form onSubmit={onSend}>
          <Typography variant="h6">Please leave a review</Typography>
          <div>
            <TextField size="small" 
            style={{margin:'20px 0', background:'graylight'}}
            value={newReview.name}
            onChange={handleChangeName}
            />
          </div>
            <TextareaAutosize 
            style={{width:'100%'}}
            minRows={6} 
            value={newReview.text}
            onChange={handleChangeText}/>
          <div>
            <Button variant="outlined" type="submit">Leave review</Button>
          </div>
        </form>
      </CardContent>
    </Card> 
    </>
  )
}

export default Reviews