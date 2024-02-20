import { IconType } from '@/types/icon'
import clsx from 'clsx'

export const MenuIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<path d="M2.25 6.188h19.5a.75.75 0 0 0 .75-.75V3.563a.75.75 0 0 0-.75-.75H2.25a.75.75 0 0 0-.75.75v1.874c0 .415.336.75.75.75Zm0 7.5h19.5a.75.75 0 0 0 .75-.75v-1.876a.75.75 0 0 0-.75-.75H2.25a.75.75 0 0 0-.75.75v1.876c0 .414.336.75.75.75Zm0 7.5h19.5a.75.75 0 0 0 .75-.75v-1.875a.75.75 0 0 0-.75-.75H2.25a.75.75 0 0 0-.75.75v1.875c0 .414.336.75.75.75Z" />
	</svg>
)
export const ArchiveIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<path
			fillRule="evenodd"
			d="M4 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16.942c0 1.67-1.923 2.604-3.236 1.573L12 18.772l-4.764 3.743C5.923 23.546 4 22.611 4 20.942V4Zm3-1a1 1 0 0 0-1 1v16.942l6-4.714 6 4.714V4a1 1 0 0 0-1-1H7Z"
			clipRule="evenodd"
		/>
	</svg>
)

export const ArrowLeftIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<path d="m3.828 9 6.071-6.071-1.414-1.414L0 10l.707.707 7.778 7.778 1.414-1.414L3.828 11H20V9z" />
	</svg>
)

export const ConfigIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 340.274 340.274"
		className={clsx('icon', className && className)}
	>
		<path d="m293.629 127.806-5.795-13.739c19.846-44.856 18.53-46.189 14.676-50.08l-25.353-24.77-2.516-2.12h-2.937c-1.549 0-6.173 0-44.712 17.48l-14.184-5.719c-18.332-45.444-20.212-45.444-25.58-45.444h-35.765c-5.362 0-7.446-.006-24.448 45.606l-14.123 5.734C86.848 43.757 71.574 38.19 67.452 38.19l-3.381.105-27.27 26.737c-4.138 3.891-5.582 5.263 15.402 49.425l-5.774 13.691C0 146.097 0 147.838 0 153.33v35.068c0 5.501 0 7.44 46.585 24.127l5.773 13.667c-19.843 44.832-18.51 46.178-14.655 50.032l25.353 24.8 2.522 2.168h2.951c1.525 0 6.092 0 44.685-17.516l14.159 5.758c18.335 45.438 20.218 45.427 25.598 45.427h35.771c5.47 0 7.41 0 24.463-45.589l14.195-5.74c26.014 11 41.253 16.585 45.349 16.585l3.404-.096 27.479-26.901c3.909-3.945 5.278-5.309-15.589-49.288l5.734-13.702c46.496-17.967 46.496-19.853 46.496-25.221V151.88c-.005-5.519-.005-7.446-46.644-24.074zM170.128 228.474c-32.798 0-59.504-26.187-59.504-58.364 0-32.153 26.707-58.315 59.504-58.315 32.78 0 59.43 26.168 59.43 58.315-.006 32.177-26.656 58.364-59.43 58.364z" />
	</svg>
)

export const CommentIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<path
			stroke="none"
			d="M5.009 5.009A3.25 3.25 0 0 1 8.25 2h9A4.75 4.75 0 0 1 22 6.75v6a3.25 3.25 0 0 1-3.009 3.241A3.25 3.25 0 0 1 15.75 19h-5.083L7 21.75c-.824.618-2 .03-2-1v-1.76a3.25 3.25 0 0 1-3-3.24v-7.5a3.25 3.25 0 0 1 3.009-3.241ZM6.518 5h9.232A3.25 3.25 0 0 1 19 8.25v6.232a1.75 1.75 0 0 0 1.5-1.732v-6a3.25 3.25 0 0 0-3.25-3.25h-9A1.75 1.75 0 0 0 6.518 5ZM5.25 17.5H6.5v2.75l3.667-2.75h5.583a1.75 1.75 0 0 0 1.75-1.75v-7.5a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 8.25v7.5c0 .966.784 1.75 1.75 1.75Z"
		/>
	</svg>
)

export const DevIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<g strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
			<path d="m7 8-4 4 4 4M17 8l4 4-4 4M14 4 9.859 19.455" />
		</g>
	</svg>
)

export const EyesCloseIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M21 12c-1.746 3.577-5.122 6-9 6m0 0c-3.878 0-7.254-2.423-9-6m9 6v3m7.422-6.578L21.5 16.5m-5.27.469L17.5 19.5M4.578 14.422 2.5 16.5m5.27.469L6.5 19.5"
		/>
	</svg>
)

export const EyesOpenIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<path
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M4.001 21c1 3 4 8 12 8s11-5 12-8M31 19c0-2-3.999-12-15-12m0 0C5.001 7 1 17 1 19M16 7V3m5.176.682-1 3.729M26 5.68l-2.001 3.463m6.143-.286-2.828 2.827M10.822 3.682l1 3.729M5.998 5.68l2 3.464m-6.142-.287 2.828 2.828M16.001 12a6 6 0 0 0 0 12 6 6 0 0 0 6-6m-.757-2.913a6.019 6.019 0 0 0-2.33-2.33M18.001 18a2 2 0 1 0-4.001.001A2 2 0 0 0 18 18Z"
		/>
	</svg>
)

export const GithubIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={16}
		height={16}
		viewBox="0 0 20 20"
	>
		<path
			fill="#000"
			fillRule="evenodd"
			d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
		/>
	</svg>
)

export const GoogleIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={16}
		height={16}
		viewBox="-0.5 0 48 48"
	>
		<title>{'Google-color'}</title>
		<g fill="none" fillRule="evenodd">
			<path
				fill="#FBBC05"
				d="M9.827 24c0-1.524.253-2.986.705-4.356l-7.909-6.04A23.456 23.456 0 0 0 .213 24c0 3.737.868 7.26 2.407 10.388l7.905-6.05A13.885 13.885 0 0 1 9.827 24"
			/>
			<path
				fill="#EB4335"
				d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094L39.202 6.4C35.036 2.773 29.695.533 23.714.533a23.43 23.43 0 0 0-21.09 13.071l7.908 6.04a13.849 13.849 0 0 1 13.182-9.51"
			/>
			<path
				fill="#34A853"
				d="M23.714 37.867a13.849 13.849 0 0 1-13.182-9.51l-7.909 6.038a23.43 23.43 0 0 0 21.09 13.072c5.732 0 11.205-2.036 15.312-5.849l-7.507-5.804c-2.118 1.335-4.786 2.053-7.804 2.053"
			/>
			<path
				fill="#4285F4"
				d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-17.618"
			/>
		</g>
	</svg>
)

export const HomeIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<path
			fillRule="evenodd"
			d="M11.31 1.776a1 1 0 0 1 1.38 0l8 7.619 2.5 2.38a1 1 0 0 1-1.38 1.45l-.81-.773V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.548l-.81.772a1 1 0 1 1-1.38-1.448l2.5-2.381 8-7.62ZM5 10.548V20h4v-5a3 3 0 1 1 6 0v5h4v-9.452L12 3.88l-7 6.667ZM13 20v-5a1 1 0 1 0-2 0v5h2Z"
			clipRule="evenodd"
		/>
	</svg>
)

export const NewPostIcon = ({ className }: IconType) => (
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 76 76"
		className={clsx('icon', className && className)}
		baseProfile="full"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M48 30h7.75L48 22.25V30Zm9 3H44V21H29v10.25l-4-4V17h23.25L61 29.75V59H25V41.75l4 4V55h28V33Zm-32.458-4.5 15.041 15.042-5.541 5.541L19 34.042l5.542-5.542Zm-6.73 4.354-3.166-2.54c-1.016-1.016-.62-3.174.396-4.189l1.583-1.583c1.015-1.016 2.943-1.412 3.958-.396l2.771 3.167-5.541 5.541Zm24.16 19.396-6.743-1.98 5.542-5.54 1.85 6.87-.65.65Z" />
	</svg>
)

export const NotificationIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<path d="M12 24a3 3 0 0 0 2.999-3H9A3 3 0 0 0 12 24Zm10.096-7.018c-.905-.973-2.6-2.437-2.6-7.232 0-3.642-2.553-6.558-5.997-7.273V1.5a1.5 1.5 0 1 0-2.998 0v.977c-3.444.715-5.997 3.63-5.997 7.273 0 4.795-1.695 6.26-2.6 7.232A1.465 1.465 0 0 0 1.5 18c.005.769.608 1.5 1.505 1.5h17.99c.896 0 1.5-.731 1.505-1.5a1.464 1.464 0 0 0-.404-1.018Z" />
	</svg>
)

export const PostIcon = ({ className }: IconType) => (
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M22.5 20.25V3.75C22.5 2.50781 21.4922 1.5 20.25 1.5H3.75C2.50781 1.5 1.5 2.50781 1.5 3.75V20.25C1.5 21.4922 2.50781 22.5 3.75 22.5H20.25C21.4922 22.5 22.5 21.4922 22.5 20.25ZM6.75 9C6.33563 9 6 8.66437 6 8.25V6.75C6 6.33563 6.33563 6 6.75 6H12.75C13.1644 6 13.5 6.33563 13.5 6.75V8.25C13.5 8.66437 13.1644 9 12.75 9H6.75ZM6.75 13.5C6.33563 13.5 6 13.1644 6 12.75V11.25C6 10.8356 6.33563 10.5 6.75 10.5H17.25C17.6644 10.5 18 10.8356 18 11.25V12.75C18 13.1644 17.6644 13.5 17.25 13.5H6.75ZM6.75 18C6.33563 18 6 17.6644 6 17.25V15.75C6 15.3356 6.33563 15 6.75 15H9.75C10.1644 15 10.5 15.3356 10.5 15.75V17.25C10.5 17.6644 10.1644 18 9.75 18H6.75Z" />
	</svg>
)

export const PrivateIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<path
			fill="#fff"
			d="M1.8 2.4C.807 2.4 0 3.207 0 4.2v2.4a.6.6 0 0 0 .6.6h3v-3c0-.993-.807-1.8-1.8-1.8Zm7.8 15.471V15.6h10.8V6c0-1.985-1.615-3.6-3.6-3.6H4.185c.38.503.615 1.122.615 1.8V18c0 1.458 1.3 2.612 2.803 2.367 1.18-.192 1.997-1.3 1.997-2.496Zm1.2-1.071V18c0 1.985-1.615 3.6-3.6 3.6h12.6a4.2 4.2 0 0 0 4.2-4.2.6.6 0 0 0-.6-.6H10.8Z"
		/>
	</svg>
)

export const ReturnIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<path fill="none" d="M0 0h48v48H0z" />
		<path d="M10 22v2c0 7.72 6.28 14 14 14s14-6.28 14-14-6.28-14-14-14h-6.662l3.474-4.298-3.11-2.515L10.577 12l7.125 8.813 3.11-2.515L17.338 14H24c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10v-2h-4z" />
	</svg>
)

export const RulesIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 512 512"
		className={clsx('icon', className && className)}
	>
		<path d="M237.591 23.95c-15.487 9.433-34.17 12.319-44.167 12.319-10.004 0-23.8-.195-43.95-11.83-8.355-4.823-9.862-5.708-14.347-5.708-12.913 0-71.396 58.376-72.363 66.334-.967 7.959 32.12 28.164 33.712 57.151 1.592 28.987-19.183 61.807-27.756 87.397-17.765 52.95-22.581 58.95-22.581 85.86 3.916 77.651 56.61 131.685 130.916 144.25 31.846 4.83 44.873 9.464 59.112 21.023 5.935 4.35 12.478 10.69 19.744 11.52v.028c.03-.003.06-.01.089-.014.03.003.06.011.089.014v-.028c7.266-.83 13.809-7.17 19.744-11.52 14.239-11.56 27.266-16.193 59.112-21.024 74.307-12.564 127-66.598 130.916-144.25 0-26.91-4.816-32.909-22.581-85.859-8.573-25.59-29.348-58.41-27.756-87.397 1.591-28.987 34.679-49.192 33.712-57.15-.967-7.959-59.45-66.335-72.363-66.335-4.485 0-5.992.885-14.347 5.709-20.15 11.634-33.946 11.829-43.95 11.829-9.997 0-28.68-2.886-44.167-12.319-4.53-2.745-10.031-5.344-18.409-5.344-6.601 0-13.347 2.294-18.409 5.344z" />
	</svg>
)

export const SearchIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<path
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M15.796 15.811 21 21m-3-10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
		/>
	</svg>
)

export const SendIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m10.3 13.695 9.802-9.798m-9.523 10.239 2.223 4.444c.537 1.075.806 1.612 1.144 1.756a1 1 0 0 0 .903-.061c.316-.188.51-.757.898-1.893l4.2-12.298c.338-.99.506-1.485.39-1.813a1 1 0 0 0-.609-.61c-.328-.115-.823.054-1.813.392l-12.297 4.2c-1.137.387-1.705.581-1.893.897a1 1 0 0 0-.061.904c.144.338.681.607 1.755 1.143l4.445 2.223c.177.088.265.133.342.192a1 1 0 0 1 .182.181c.059.077.103.166.191.343Z"
		/>
	</svg>
)

export const StarIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<path
			fill="none"
			strokeWidth={1.5}
			d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45.28-.213.46-.536.82-1.182l.328-.588Z"
		/>
	</svg>
)

export const TermsIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<path d="M12 12a6 6 0 1 0 0-12 6 6 0 1 0 0 12Zm4.49 1.528L14.25 22.5l-1.5-6.375 1.5-2.625h-4.5l1.5 2.625-1.5 6.375-2.24-8.972c-3.343.16-6.01 2.892-6.01 6.272v1.95A2.25 2.25 0 0 0 3.75 24h16.5a2.25 2.25 0 0 0 2.25-2.25V19.8c0-3.38-2.667-6.113-6.01-6.272Z" />
	</svg>
)

export const OptionIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<path d="M12 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM19 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM5 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z" />
	</svg>
)

export const CheckDoubleIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('icon', className && className)}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m4 14 5 5L20 8M6 8.889 9.077 12 16 5"
		/>
	</svg>
)

export const CircleIcon = ({ className }: IconType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		className={clsx('w-full h-full max-w-4 max-h-4 shrink-0 fill-changes', className && className)}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
		/>
	</svg>
)
