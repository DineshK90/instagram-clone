import {Button} from 'react-bootstrap'

export default function IconButton({className, isTop, isBottom, onClick}){
let variant = "light"
if(isTop){
    variant = 'light my-4'
} else if(isBottom){
    variant = 'light mt-auto mb-3'
}

    return(
        <Button variant={variant} className='mb-3' 
        onClick={onClick}>
            <i className={className} style={{'font-size':'24px'}}/>
        </Button>
    )
}