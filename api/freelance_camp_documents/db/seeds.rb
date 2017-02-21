10.times do |d|
FreelanceDocument.create!(
  title: "Document #{d}",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  file_url: "http://google.com",
  image_url: "https://s3.amazonaws.com/devcamp-static/images/freelance-img.jpg"
  )
end
