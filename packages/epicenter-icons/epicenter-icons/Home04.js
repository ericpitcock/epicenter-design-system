import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 9.98834V19.5C3 20.6046 3.89543 21.5 5 21.5H19C20.1046 21.5 21 20.6046 21 19.5V9.98834C21 9.3654 20.7097 8.77803 20.2149 8.39963L12.8972 2.80373C12.6396 2.60673 12.3243 2.5 12 2.5C11.6757 2.5 11.3604 2.60673 11.1028 2.80373L3.7851 8.39963C3.29026 8.77804 3 9.3654 3 9.98834Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 17H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Home04',
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
