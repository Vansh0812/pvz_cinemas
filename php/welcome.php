<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Data</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            color: #333;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            max-width: 600px;
            width: 90%;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 30px;
            box-sizing: border-box;
        }

        h2 {
            margin-top: 0;
            color: #007bff;
        }

        p {
            margin: 0 0 20px;
            line-height: 1.6;
        }

        .highlight {
            background-color: #f2f9ff;
            padding: 10px;
            border-radius: 4px;
        }

        .btn {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }

        .btn:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>User details!</h2>
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            echo "<p><strong>First Name:</strong> " . $_POST["first_name"] . "</p>";
            echo "<p><strong>Last Name:</strong> " . $_POST["last_name"] . "</p>";
            echo "<p><strong>Email:</strong> " . $_POST["email"] . "</p>";
            echo "<p><strong>Age:</strong> " . $_POST["age"] . "</p>";
            echo "<p><strong>Gender:</strong> " . $_POST["gender"] . "</p>";
            echo "<p><strong>City:</strong> " . $_POST["city"] . "</p>";
            if (!empty($_POST["interests"])) {
                echo "<p><strong>Interests:</strong> " . implode(", ", $_POST["interests"]) . "</p>";
            }
            echo "<p><strong>Comments:</strong> " . $_POST["comments"] . "</p>";
        }
        ?>
        <button class="btn" onclick="window.history.back();">Go Back</button>
    </div>
</body>
</html>