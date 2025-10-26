import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 11L22 12C22 6.47715 17.5228 2 12 2C7.89936 2 4.3752 4.46819 2.83209 8M4 13L2 12C2 17.5228 6.47715 22 12 22C16.1006 22 19.6248 19.5318 21.1679 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 11H12.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 7C9.79086 7 8 8.80893 8 11.0404C8 13.4477 10.1791 14.6616 11.5422 16.3546C11.7726 16.6408 12.2381 16.6482 12.4737 16.3661C13.8604 14.7054 16 13.4008 16 11.0404C16 8.80893 14.2091 7 12 7Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LocationUpdate02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
