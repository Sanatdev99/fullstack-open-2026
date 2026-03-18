const Header = ({ courseName }) => {
	return <h1> {courseName} </h1>
}


const Part = ({ part }) => {
	console.log("hozirgi part:",part)
	return (
		<p>
			{part.name} {part.exercises}
		</p>
	)
}

const Content = ({ parts }) => {
	return (
		<div>
			{parts.map(part => 
				<Part key={part.id} part={part} />
			)}
		</div>
	)
}

const Course = ({ course }) => {
	const total = course.parts.reduce((s,p) => {
		console.log('what is happening',s,p)
		return s + p.exercises 
	}, 0)
	return (
		<div>
			<Header courseName={course.name} />
			<Content parts={course.parts} />
			<p><b> total of {total } exercises </b></p>
		</div>
	)
}
export default Course