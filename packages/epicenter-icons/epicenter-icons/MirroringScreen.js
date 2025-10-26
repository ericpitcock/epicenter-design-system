import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 21C4 19.8954 3.10457 19 2 19M8 21C8 17.6863 5.31371 15 2 15M12 21C12 15.4772 7.52285 11 2 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.2941 20H19C20.6569 20 22 18.6569 22 17V6C22 4.34315 20.6569 3 19 3H6C4.34315 3 3 4.34315 3 6V8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MirroringScreen',
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
