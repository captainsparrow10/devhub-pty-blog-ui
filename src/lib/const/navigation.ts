import {
	ArchiveIcon,
	DevIcon,
	HomeIcon,
	NotificationIcon,
	PostIcon,
	PrivateIcon,
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
	{
		icon: DevIcon,
		title: 'About',
		route: '/about',
	},
	{
		icon: RulesIcon,
		title: 'Rules',
		route: '/rules',
	},
	{
		icon: PrivateIcon,
		title: 'Privacy Policy',
		route: '/private',
	},
	{
		icon: TermsIcon,
		title: 'Terms of use',
		route: '/terms',
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
