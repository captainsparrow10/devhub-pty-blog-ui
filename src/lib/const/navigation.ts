import { ArchiveIcon, DevIcon } from '@/components/icons'
import HomeIcon from '@/components/icons/home'
import NotificationIcon from '@/components/icons/notification'
import PostIcon from '@/components/icons/post'
import PrivateIcon from '@/components/icons/private'
import RulesIcon from '@/components/icons/rules'
import TermsIcon from '@/components/icons/terms'
import { IconType } from '@/types/icon'

export const navigationIcons = [
	{
		icon: HomeIcon,
		title: 'Home',
		route: '/',
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
		route: '/archive',
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
