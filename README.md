
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?


# getElementById: getElementById is the access of html element finding by the javascript.It is identical .Every id is the unique.As a result the target element perfectly access the javascript code.

# getElementByClassName: getElementByClassName is one of the html element finder whereas many elements becomes the class name.Every class has many elements access and the call the class donot dot the class name when the use of js .
# querySelector: When the html target element requirement the first id or class name access the querySelector method and return the value of object.If element do not get the return the NULL value.

# querySelectorAll: When the html id or class all element require than use the querySelectorAll.It accesses the all mathched element id,class.If the id,class do not get the return the nodelist or array like.


2. How do you **create and insert a new element into the DOM**?

 # Answer: The DOM element insert two step firstly create an element secondly insert the DOM.document.CreateElement() this method use to make the element here html argument input .Then the element connected the dom.Many method of this connect the dom html element to dom such as appendChild() append() prepend() insertAdjacentElement() etc .


3. What is **Event Bubbling** and how does it work?

# Event Bubbling is the Document Object Model here the minimum inner element target trigger than the upper element continously flow the root lavel.Event directly target to action the trigger.Another is the bubbling fage here the parent section than continously follow the DOM of the root .Use the event bubbling the code easy to use and one of the best best event bubbling is Event Delegation.


4. What is **Event Delegation** in JavaScript? Why is it useful?

# Answer: The Event Bubbling type one of the Event Delegation .Many child element event handling logic in the same child element than use it .It provides the efficient memory because the many child donot require. and this work eventlistener method .



5. What is the difference between **preventDefault() and stopPropagation()** methods?


# Answer: preventDefault() and the stopPropagation() used the control of the event.preventDefault() controls the extra activites of browsers and the stopPropagation() controls the DOM behaviors. preventDefault() donot effects the event bubbling and the stopPropagation() also effects of it ,because the bubbling and capturing stop the event.