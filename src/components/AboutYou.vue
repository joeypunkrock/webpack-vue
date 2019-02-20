<template>
    <div id="about-you">
        <h3>A little bit about you</h3>
        <div class="details">
            <div class="details-editor">
                <h4>What is your:</h4>
                <div class="details-editor-row">
                    <label>Name</label>
                    <input type="text" v-model.lazy="details.name">
                </div>
                <div class="details-editor-row">
                    <label>Age</label>
                    <input type="number" v-model.number="details.age">
                </div>
                <div class="details-editor-row">
                    <label>Favourite Color</label>
                    <input type="text" v-model="details.favouriteColor">
                </div>
                <div class="details-editor-row">
                    <label>Gender</label>
                    <select v-model="details.gender">
                        <option disabled value="">Please select one</option>
                        <option value="Man">Male</option>
                        <option value="Woman">Female</option>
                    </select>
                </div>
                <div class="details-editor-row">
                    <label>Bio</label>
                    <textarea v-model="details.bio" placeholder="Add multiple lines" rows="5"></textarea>
                </div>
            </div>
            <div class="details-view">
                <h4>Your details:</h4>
                <p>Your name is <strong>{{ details.name }}</strong>.</p>
                <p>You are <strong>{{ details.age }}</strong> years old.</p>
                <p>Your favourite colour is <strong :style="{ color: details.favouriteColor }">{{ details.favouriteColor }}</strong>.</p>
                <p>You are a <strong>{{ details.gender }}</strong>.</p>
                <span>Your bio:</span>
                <p class="details-view-bio" style="white-space: pre-line;">{{ details.bio }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutYou',
    data: function () {
        return {
            details: {
                name: 'Joey',
                age: '25',
                favouriteColor: 'Blue',
                gender: 'Man',
                bio: 'I am a web developer. \n I work for Innoved. \n \n I enjoy Frontend development.',
            }
        }
    }
}

</script>


<style scoped>
.details {
    display: flex;
    text-align: left;
    justify-content: center;
}

.details-editor,
.details-view {
    margin: 0 1rem;
    padding: 1rem;
    border: solid 1px #ccc;
    border-radius: 5px;
    width: 265px;
}

h4 {
    margin: 0 0 10px 0;
}

.details-editor-row {
    margin-bottom: 0.5rem;
}

label {
    display: block;
}

input,
textarea,
select {
    width: 100%;
    border: solid 1px #ccc;
    padding: 5px;
    border-radius: 3px;
}

.details-view-bio {
    font-size: 85%;
    margin-top: 2px;
}

p {
    margin: 33px 0;
}

</style>
