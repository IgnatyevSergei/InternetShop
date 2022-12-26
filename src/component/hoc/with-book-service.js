import React from "react";
import {BooksServiceConsumer} from '../../service-context/book-service-context'



const withBookService = () => (ViewComponent) => {
    return (props) => {
     return   (<BooksServiceConsumer>
            {
                (service) => {
                    return (
                        <ViewComponent {...props} service={service}/>
                    )
                }
            }
        </BooksServiceConsumer>)
    }
}


export default withBookService