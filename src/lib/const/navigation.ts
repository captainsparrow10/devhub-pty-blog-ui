import {
	ArchiveIcon,
	DevIcon,
	HomeIcon,
	LogOutIcon,
	NotificationIcon,
	PostIcon,
	PrivateIcon,
	ProfileIcon,
	ReturnIcon,
	RulesIcon,
	TermsIcon,
} from '@/components/icons'

export const navigationIcons = [
	{
		icon: HomeIcon,
		title: 'Home',
		route: '/home',
	},
	{
		icon: PostIcon,
		title: 'My Posts',
		route: '/posts',
	},
	{
		icon: NotificationIcon,
		title: 'Notifications',
		route: '/notifications',
	},
	{
		icon: ArchiveIcon,
		title: 'Archive',
		route: '/archives',
	},
]

export const configIcons = [
	{
		icon: ProfileIcon,
		title: 'profile',
	},
	{
		icon: ReturnIcon,
		title: 'back',
	},
	{
		icon: LogOutIcon,
		title: 'log out',
	},
]

export const tags = [
	{
		title: 'all',
	},
	{
		title: 'react',
	},
	{
		title: 'nextjs',
	},
	{
		title: 'angular',
	},
	{
		title: 'js',
	},
	{
		title: 'sanity',
	},
	{
		title: 'prisma',
	},
]
