import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 22C15.9706 22 20 17.9706 20 13H11M11 22C6.02944 22 2 17.9706 2 13C2 8.02944 6.02944 4 11 4V13M11 22V13', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 10C22 5.58172 18.4183 2 14 2V10H22Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PieChart02',
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
