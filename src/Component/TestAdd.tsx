import React from 'react'
import { useState } from 'react'

function TestAdd() {

    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState<string[]>([])

    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]

            return newJobs
        })
        setJob('')
    }

    return (
        <div style={{ padding: 32 }}>
            <input value={job} onChange={e => setJob(e.target.value)}></input>
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    )
}

export default TestAdd