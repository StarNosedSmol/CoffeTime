import React, { useState } from "react";

function CreateForm() {
  return (
    <div id='create-form'>
      <h2>Create an event</h2>
      <form>
        <label>
          Host
          <input type='text' value='' />
        </label>
        <label>
          Event
          <input type='text' value='' />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default CreateForm;
