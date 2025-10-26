import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.6618 14L13.4916 14V16.5H15.6618V19H13.4916M11 14V17.5C11 18.3284 10.3284 19 9.5 19C8.67157 19 8 18.3284 8 17.5V17M21 19L19.5 16.5M19.5 16.5L18 14M19.5 16.5L21 14M19.5 16.5L18 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 22H5C3.89543 22 3 21.1046 3 20L3 4C3 2.89543 3.89543 2 5 2H12L19 9V11M18.5 9H13.998C12.8935 9 11.998 8.10457 11.998 7V2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Jsx03',
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
