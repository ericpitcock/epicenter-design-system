import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.9346 2.42125C9.03491 3.88072 3 8.89368 3 13.678C3 17.7804 6.21878 22 11.5 22C16.7812 22 20 17.7804 20 13.678C20 8.89368 13.9651 3.88072 12.0654 2.42125C11.7298 2.16343 11.2702 2.16343 10.9346 2.42125Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 14C15.5 16.2091 13.7091 18 11.5 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Droplet',
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
