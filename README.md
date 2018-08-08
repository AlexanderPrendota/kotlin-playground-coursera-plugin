# Kotlin Playground Coursera 
Allows embedding interactive Kotlin playground to [coursera](https://www.coursera.org/) lessons.

Plugin Current version: 0.0.1 :tada:

## Installation

1. Download [latest release](https://github.com/AlexanderPrendota/kotlin-playground-coursera-plugin/releases).
2. Go to [coursera.org](https://www.coursera.org/)
3. From the left sidebar, select `Admin`
4. Find your course and click `Edit` next to the course title
5. From the left sidebar, click Content and select `Edit Content`
6. Find the lesson you want to add a plugin to, or create a new lesson
7. From the `ADD ITEM` dropdown menu, select `Ungraded Plugin`
8. Click Choose Plugin to select the plugin you want to add
9. Click Continue and `Edit Configuration`, if needed
10. When you’re done, click `Review & Publish`

## Usage

Find configuration panel on `Edit Configuration` and set code snippet:

```json
{
  "code": "fun main(args: Array<String>) {\n println(\"Hello world\")\n}"
}
```
* Default theme: `idea`.
* Default platform: `JVM`.
* Default kotlin version : [latest stable](https://try.kotlinlang.org/kotlinServer?type=getKotlinVersions) version.
