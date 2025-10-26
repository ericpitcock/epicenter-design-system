import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 20H2L7.11228 5.34385C7.73729 3.55205 10.2627 3.55205 10.8877 5.34385L12.5 9.96602', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 20H22L15.7033 9.93615C14.9223 8.68795 13.0777 8.68795 12.2967 9.93615L9.12837 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mountain',
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
