<?php include 'header.php'; ?>

<main>
    <h1>Contact Us</h1>
    <p>Get in touch with us using the form below:</p>
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Send</button>
    </form>
</main>

<?php include 'footer.php'; ?>