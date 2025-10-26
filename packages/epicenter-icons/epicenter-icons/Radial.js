import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1915 2.4801 8.49505 3.31981 7.03127', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Radial',
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
