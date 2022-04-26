import React, {useState, useEffect} from 'react'
import styles from './Services.module.css'
import backgroundImage from './pexels-sagui-andrea-618833.jpg'
import { Grid } from '@mui/material'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'

const Services = () => {
    const {
		register,
		handleSubmit,
		reset,
		isDirty,
		formState,
		formState: { errors, isSubmitSuccessful },
	} = useForm()

	const [showMessage, setShowMessage] = useState(false)

	const sendEmail = (data, e) => {
		console.log('hello', data)
		e.preventDefault()
		emailjs
			.sendForm(
				'service_rfyq1b8',
				'template_gjijrm5',
				e.target,
				'user_RvBcfNskpg2k1v812rots'
			)
			.then(
				result => {
					console.log(result.text)
				},
				error => {
					console.log(error.text)
				}
			)
		e.target.reset()
	}

	useEffect(() => {
		if (formState.isDirty) {
			setShowMessage(false)
		}
		if (formState.isSubmitSuccessful) {
			setShowMessage(true)
			reset()
		}
	}, [formState, isSubmitSuccessful, isDirty, reset])
  return (
    <>
          <img src={backgroundImage} alt='mountains' className={styles.servicesPageBackground} />
          <div class={`${styles.services} contentContainer`}>
                <Grid container justifyContent='space-around' alignContent='center' spacing={2}>
                    <Grid item xs={12}>
                        <h2 class='bold xl'>Bespoke solutions to any business or organizational need. Core services with proven track record of success:</h2>
                    </Grid>
                    <Grid item xs={4} class='centerJustify'>
                        <h3 class='semiBold lg'>Strategy</h3>
                        <ul class='leftJustify regular'>
                            <li>
                                Startup Acceleration
                            </li>
                            <li>
                                Strategic Realignment
                            </li>
                            <li>
                                Business Models
                            </li>
                            <li>
                                Market Development
                            </li>
                            <li>
                                Marketing
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={4} class='centerJustify service'>
                        <h3 class='semiBold lg'>Culture and Change</h3>
                        <ul class='leftJustify regular'>
                            <li>
                                UX & CX
                            </li>
                            <li>
                                Development or Turnaround
                            </li>
                            <li>
                                Organizational Design
                            </li>
                            <li>
                                Change Management
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={4} class='centerJustify service'>
                        <h3 class='semiBold lg'>Agile Project Management</h3>
                        <ul class='leftJustify regular'>
                            <li>
                                MVP Development
                            </li>
                            <li>
                                Product Modeling
                            </li>
                            <li>
                                Web Dev and Scaling
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12}>
                        <h2 class='bold xl'>Contact Us</h2>
                    </Grid>
                  {!showMessage && <Grid item xs={12}>
                      <form className={styles.contactForm} onSubmit={handleSubmit(sendEmail)} autoComplete='off'>
                          <input required type='text' name='name' placeholder='Name' class={styles.input} {...register('name', { required: 'Name is required.' })} />
                          {errors.name && (<p className='form-error-text'>{errors.name.message}</p>)}
                          <input required type='text' name='email' placeholder='Email' class={styles.input} {...register('email', {
                            required: 'Email is required.',
                            pattern: {
                                value:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email',
                            },
                        })} />
                          {errors.email && (<p className='form-error-text'>{errors.email.message}</p>)}
                          <input required type='text' name='phone' placeholder='Phone' class={styles.input} {...register('phone', { required: 'Phone is required.' })} />
                          {errors.phone && (<p className='form-error-text'>{errors.phone.message}</p>)}
                          <textarea required placeholder='Message' name='message' className={`${styles.input} ${styles.message}`} {...register('message', { required: 'Message is required.' })} />
                          {errors.message && (<p className='form-error-text'>{errors.message.message}</p>)}
                          <input type='submit' className={`${styles.submit} md`} value='Send' />
                      </form>
                  </Grid>}
                    <p className={showMessage ? '' : 'hide'}>
                        Thank you for contacting Aretetic Solutions! We have received your
                        message, and will be in touch soon.
                    </p>
                </Grid>
            </div>
    </>
  )
}

export default Services