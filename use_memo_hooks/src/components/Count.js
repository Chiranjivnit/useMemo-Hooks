import React, { useState, useMemo, useCallback } from 'react';

function Count() {

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const incrementCountOne = useCallback(() => {
        setCountOne(countOne + 1)
    }, [countOne])

    const incrementCountTwo = useCallback(() => {
        setCountTwo(countTwo + 1)
    }, [countTwo])


    const isEven = useMemo(() => {
        let i = 0;
        while (i < 900000000) i++
        return countOne % 2 === 0

    }, [countOne])


    return (
        <div className="App">
            <header className="App-header">
                <button onClick={incrementCountOne} >IncreseCountOne</button>

                <h1> countOne: {countOne} {<span>{isEven ? 'Even' : 'Odd'}</span>}</h1>
                <button onClick={incrementCountTwo} >DrecementCountOne</button>
                <h1> countTwo: {countTwo}</h1>
            </header>
        </div>
    );
}

export default Count;
// USEMEMO
// its also for performance optimizations .Like it will help when we have functionaly
// logic like sorting bunch of array , bunch of if else conditions, bunch of array map 
//bunch of switch case, bunch of calculatrions .

// WHERE TO APPLY 

// APPLY ON every functions like no 8 , 12 , 15

// HOW TO APPLY 

// Just import the useMemo from react, Then put our function inside the useMemo
// like line no 8, 12, 15
// then assign that useMemo inside a variable. Like 8, 12, 15.


// After Apply useMemo we can see the other functions are not affect that means ,expet isEven function
// every function workinhg very fast , Bt before itr was like slow down our every function.
//it is because after using the useMemo(), react cast perticular function value so that when different functions update different state 
// update , SO no body depend upon any body.

// This is how we r doing perfermance optimization.

//Difference between useCallback() and useMemo()
 //Use callback() cast  the provided function instance itself .
 //Where as useMemo() invokes the provided function and cast its results 

 //NOTE:
 //When we need to cast a function use callBack()
// When we need to cast the result of any invoked function then use useMemo()

