import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.5 16.5962C13.9836 19.1346 9.9037 19.1346 7.3873 16.5962C4.8709 14.0578 4.8709 9.94221 7.3873 7.40381C8.89843 5.87946 10.9734 5.27051 12.935 5.57693', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 12L19.0711 4.92893C17.2614 3.11929 14.7614 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.5778 21.7031 9.22492 21.1679 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Radar01',
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
