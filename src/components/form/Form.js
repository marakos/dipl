import { useState } from "react";
import { useMutation } from "@apollo/client";
import ADD_COMMENT from "../../mutations/add-comment";
import { v4 } from "uuid";
import React from "react";
import Router from "next/router";
import { toast } from "react-toastify";

//...

const Form = ({ title, product, refetch }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [productQryInput, setProductQryInput] = React.useState({});
  const [requestError, setRequestError] = React.useState(null);

  const asdasd = async (data) => {
    const tmp = {
      clientMutationId: v4(),
      commentOn: product.productId,
      authorEmail: email,
      author: name,
      content: message,
    };
    setProductQryInput(tmp);
    await addComment();
  };

  // Add to Cart Mutation.
  const [
    addComment,
    { data: addCommentRes, loading: addCommentLoading, error: addCommentError },
  ] = useMutation(ADD_COMMENT, {
    variables: {
      input: {
        clientMutationId: v4(),
        commentOn: product?.productId,
        authorEmail: email,
        author: name,
        content: message,
      },
    },
    onCompleted: () => {
      console.log("edw");
      toast.success("Comment Added");
      // On Success:
      // 1. Make the GET_CART query to update the cart with new values in React context.
      // Router.reload(window.location.pathname);
      // 2. Show View Cart Button
      // setShowViewCart(true);
      Router.replace(router.asPath);
    },
    onError: (error) => {
      if (error) {
        setRequestError(error?.graphQLErrors?.[0]?.message ?? "");
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    asdasd(data);
  };

  return (
    <div>
      <h2 className='main-title text-xl mb-5 mt-5 uppercase'>
        <span className='text-2xl mb-5'>{title}</span>
      </h2>
      <form onSubmit={handleSubmit} className='w-full max-w-lg'>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full  px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-first-name'
            >
              Onoma
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-first-name'
              type='text'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              E-mail
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='email'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Message
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className=' no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none'
              id='message'
            ></textarea>
          </div>
        </div>
        <div className='md:flex md:items-center'>
          <div className='md:w-1/3'>
            <button
              className='shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='submit'
              disabled={addCommentLoading ? true : false}
            >
              Send
            </button>
          </div>
          <div className='md:w-2/3'></div>
        </div>
      </form>
    </div>
  );
};
export default Form;
