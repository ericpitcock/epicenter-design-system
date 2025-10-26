import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 5.50082C19.989 6.2886 22 7.76102 22 9.44744C22 11.9637 17.5228 14.0036 12 14.0036C6.47715 14.0036 2 11.9637 2 9.44744C2 7.76102 4.01099 6.2886 7 5.50082' })
const _hoisted2 = h('path', { 'd': 'M12 17.0046V21M16 16.0042L18 21M8 16L6 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17.9946 9.00179C17.9987 9.00044 18 8.99699 18 8.99268C17.9961 4.99756 14.81 3 12.011 3C8.50363 3 6.00306 4.99755 6 8.99267C6 8.99698 6.00129 9.00043 6.00539 9.00177C6.148 9.04838 9.09518 10 12.011 10C14.9265 9.99999 17.8524 9.04858 17.9946 9.00179Z' })

export default defineComponent({
    name: 'Spaceship',
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
