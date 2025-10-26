import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 22H4C2.89543 22 2 21.1046 2 20L2 4C2 2.89543 2.89543 2 4 2H11L18 9V11M17.5 9H12.998C11.8935 9 10.998 8.10457 10.998 7V2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 14V19L8 16.5L10 19V14M12.5 19L14.25 14H14.75L16.5 19M13.5 17.5H15.5M18 14L19.75 19H20.25L22 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Wav02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
