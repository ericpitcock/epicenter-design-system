import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.691 5.52665L12.3652 2.07293C12.1307 1.97569 11.8693 1.97569 11.6348 2.07293L3.30903 5.52665C2.89699 5.69757 2.89699 6.30243 3.30903 6.47335L11.6348 9.92707C11.8693 10.0243 12.1307 10.0243 12.3652 9.92707L20.691 6.47335C21.103 6.30243 21.103 5.69757 20.691 5.52665Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 6V18.0032C20.9989 18.1961 20.8959 18.3884 20.691 18.4734L12.3652 21.9271C12.248 21.9757 12.124 22 12 22M3.00001 6V18.0032C3.00114 18.1961 3.10415 18.3884 3.30903 18.4734L11.6348 21.9271C11.7521 21.9757 11.876 22 12 22M12 22V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.5 10.4983V7.9983L16.5 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5.5 16V13L9 14.5V17.5L5.5 16Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Package03',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
